import { ethers, providers } from 'ethers';
import { writeFileSync } from 'fs';

import { CHAINS } from './mychains';
import { ADDRESSES } from './addresses';
import { SingleBar } from 'cli-progress';

async function getBalance(rpcUrl: string, address: string) {
  // Connect to the specified chain using the RPC URL
  const provider = new providers.JsonRpcProvider(rpcUrl);

  // Get the balance of the specified address
  const balance = await provider.getBalance(address);
  //if (balance.gt(0)) {
  //  console.log(`Nonzero-balance: ${balance}`)
  //}

  return balance;
}

interface ChainBal {
    index: number;
    chain: string;
    balance: string;
}

function replacer(key: any, value: any) {
  if(value instanceof Map) {
    return Array.from(value).map(([key, val]) => ({ index: val[0].index, address: key, bals: val}));
  } else {
    return value;
  }
}

async function getBalances(chains: any[], addresses: string[]) {
  //const addressBalances = new Map<string, Map<string, string>>();
  const addressBalances = new Map<string, Array<ChainBal>>();
  //const addressBalances : any = {};

  let chainIter = 0;
  for (const chain of chains) {
    console.log(`Chain ${chainIter} - ${chain.name} with rpc ${chain.rpc[0]}`);
    const name = chain.name;
    const rpcUrl = chain.rpc[0]; // use the first RPC URL in the list
    const chainBalances: any[] = [];

    let addressIter = 0;
    const bar = new SingleBar({});
    bar.start(addresses.length, 0, { speed: "N/A" });
    for (const address of addresses) {
      //console.log(`    Address ${addressIter}: ${address}`);
      try {
        const balance = await getBalance(rpcUrl, address);
        if (balance.gt(0)) {
          //console.log(`        Nonzero-balance: ${balance}`)
          const balStr = balance.toString();
          if (!addressBalances.has(address)) {
            addressBalances.set(address, new Array<ChainBal>());
          }
          addressBalances.get(address)!.push({ index: addressIter, chain: chain.name, balance: balStr});
        }
      } catch (error) {
        console.error(`        Error getting balance on ${name}: ${error}`);
      }
      addressIter++;
      bar.increment();
    }
    bar.stop();
    writeFileSync(`json/${chainIter}.json`, JSON.stringify(addressBalances, replacer, 2).replace(/\\"/g, '"'));
    chainIter++;
  }

  return addressBalances;
}

const NO_TESTNET = true;
const NO_MAINNET = false;

const TESTNET_STRINGS = ['goerli', 'mumbai', 'rinkeby', 'ropsten', 'kovan', 'test', 'betanet']
function isTestnet(name: string) {
    for (const testnetStr of TESTNET_STRINGS) {
        if (name.toLowerCase().includes(testnetStr)) {
            return true;
        }
    }
    return false
}

interface AddressBals { 
    index: number;
    address: string;
    bals: string;
}

async function main() {
  // Call the function with a test address
  //const ADDRESSES = ['0x14E8F54f35eE42Cdf436A19086659B34dA6D9D47', '0xC01FE7D6f2e0ac57ca1A01F123AAD49dea679735', '0x14E8F54f35eE42Cdf436A19086659B34dA6D9D47'];
  const chains = CHAINS.filter(chain => {
    if (NO_TESTNET) {
        return !isTestnet(chain.name);
    }
    if (NO_MAINNET) {
        return isTestnet(chain.name);
    }
    return true;
  });

  console.log(`Getting balances on ${chains.length} chains`);
  const results = await getBalances(chains, ADDRESSES);

  writeFileSync('json/balances.json', JSON.stringify(results, replacer, 2).replace(/\\"/g, '"'));
}

main();