const INFURA_API_KEY = process.env.INFURA_API_KEY;

export const CHAINS = [
    {
        "name": "Ethereum Mainnet",
        "chainId": 1,
        "shortName": "eth",
        "networkId": 1,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
            `wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}`,
            "https://api.mycryptoapi.com/eth",
            "https://cloudflare-eth.com"
        ],
        "infoURL": "https://ethereum.org"
    },
    {
        "name": "Ropsten",
        "chainId": 3,
        "shortName": "rop",
        "networkId": 3,
        "nativeCurrency": {
            "name": "Ropsten Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
            `wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}`
        ],
        "infoURL": "https://github.com/ethereum/ropsten"
    },
    {
        "name": "Rinkeby",
        "chainId": 4,
        "shortName": "rin",
        "networkId": 4,
        "nativeCurrency": {
            "name": "Rinkeby Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
            `wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}`
        ],
        "infoURL": "https://www.rinkeby.io"
    },
    {
        "name": "Goerli",
        "chainId": 5,
        "shortName": "gor",
        "networkId": 5,
        "nativeCurrency": {
            "name": "Goerli Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
            `wss://goerli.infura.io/v3/${INFURA_API_KEY}`,
            "https://rpc.goerli.mudit.blog/"
        ],
        "infoURL": "https://goerli.net/#about"
    },
    {
        "name": "Ethereum Classic Testnet Kotti",
        "chainId": 6,
        "shortName": "kot",
        "networkId": 6,
        "nativeCurrency": {
            "name": "Kotti Ether",
            "symbol": "KOT",
            "decimals": 18
        },
        "rpc": [
            "https://www.ethercluster.com/kotti"
        ],
        "faucets": [],
        "infoURL": "https://explorer.jade.builders/?network=kotti"
    },
    {
        "name": "Ubiq",
        "chainId": 8,
        "shortName": "ubq",
        "networkId": 8,
        "nativeCurrency": {
            "name": "Ubiq Ether",
            "symbol": "UBQ",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.octano.dev",
            "https://pyrus2.ubiqscan.io"
        ],
        "faucets": [],
        "infoURL": "https://ubiqsmart.com"
    },
    {
        "name": "Ubiq Network Testnet",
        "chainId": 9,
        "shortName": "tubq",
        "networkId": 2,
        "nativeCurrency": {
            "name": "Ubiq Testnet Ether",
            "symbol": "TUBQ",
            "decimals": 18
        },
        "rpc": [],
        "infoURL": "https://ethersocial.org"
    },
    {
        "name": "Optimism",
        "chainId": 10,
        "shortName": "oeth",
        "networkId": 10,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://mainnet.optimism.io/"
        ],
        "faucets": [],
        "infoURL": "https://optimism.io"
    },
    //{
    //    "name": "ShibaChain",
    //    "chainId": 27,
    //    "shortName": "shib",
    //    "networkId": 27,
    //    "nativeCurrency": {
    //        "name": "SHIBA INU COIN",
    //        "symbol": "SHIB",
    //        "decimals": 18
    //    },
    //    "rpc": [
    //        "https://rpc.shibachain.net"
    //    ],
    //    "infoURL": "https://www.shibachain.net"
    //},
    {
        "name": "RSK Mainnet",
        "chainId": 30,
        "shortName": "rsk",
        "networkId": 30,
        "nativeCurrency": {
            "name": "Smart Bitcoin",
            "symbol": "RBTC",
            "decimals": 18
        },
        "rpc": [
            "https://public-node.rsk.co",
            "https://mycrypto.rsk.co"
        ],
        "infoURL": "https://rsk.co"
    },
    {
        "name": "RSK Testnet",
        "chainId": 31,
        "shortName": "trsk",
        "networkId": 31,
        "nativeCurrency": {
            "name": "Testnet Smart Bitcoin",
            "symbol": "tRBTC",
            "decimals": 18
        },
        "rpc": [
            "https://public-node.testnet.rsk.co",
            "https://mycrypto.testnet.rsk.co"
        ],
        "infoURL": "https://rsk.co"
    },
    {
        "name": "Kovan",
        "chainId": 42,
        "shortName": "kov",
        "networkId": 42,
        "nativeCurrency": {
            "name": "Kovan Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://kovan.poa.network",
            "http://kovan.poa.network:8545",
            `https://kovan.infura.io/v3/${INFURA_API_KEY}`,
            `wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}`,
            "ws://kovan.poa.network:8546"
        ],
        "infoURL": "https://kovan-testnet.github.io/website"
    },
    {
        "name": "Darwinia Pangolin Testnet",
        "chainId": 43,
        "shortName": "pangolin",
        "networkId": 43,
        "nativeCurrency": {
            "name": "Pangolin Network Native Token",
            "symbol": "PRING",
            "decimals": 18
        },
        "rpc": [
            "https://pangolin-rpc.darwinia.network"
        ],
        "infoURL": "https://darwinia.network/"
    },
    {
        "name": "Darwinia Crab Network",
        "chainId": 44,
        "shortName": "crab",
        "networkId": 44,
        "nativeCurrency": {
            "name": "Crab Network Native Token",
            "symbol": "CRAB",
            "decimals": 18
        },
        "rpc": [
            "https://crab-rpc.darwinia.network"
        ],
        "infoURL": "https://crab.network/"
    },
    {
        "name": "Darwinia Pangoro Testnet",
        "chainId": 45,
        "shortName": "pangoro",
        "networkId": 45,
        "nativeCurrency": {
            "name": "Pangoro Network Native Token",
            "symbol": "ORING",
            "decimals": 18
        },
        "rpc": [
            "https://pangoro-rpc.darwinia.network"
        ],
        "infoURL": "https://darwinia.network/"
    },
    {
        "name": "Darwinia Network",
        "chainId": 46,
        "shortName": "darwinia",
        "networkId": 46,
        "nativeCurrency": {
            "name": "Darwinia Network Native Token",
            "symbol": "RING",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.darwinia.network"
        ],
        "infoURL": "https://darwinia.network/"
    },
    {
        "name": "Binance Smart Chain Mainnet",
        "chainId": 56,
        "shortName": "bnb",
        "networkId": 56,
        "nativeCurrency": {
            "name": "Binance Chain Native Token",
            "symbol": "BNB",
            "decimals": 18
        },
        "rpc": [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org"
        ],
        "infoURL": "https://www.binance.org"
    },
    {
        "name": "Syscoin Mainnet",
        "chainId": 57,
        "shortName": "sys",
        "networkId": 57,
        "nativeCurrency": {
            "name": "Syscoin",
            "symbol": "SYS",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.syscoin.org",
            "wss://rpc.syscoin.org/wss"
        ],
        "infoURL": "https://www.syscoin.org"
    },
    {
        "name": "EOS Mainnet",
        "chainId": 59,
        "shortName": "EOSMainnet",
        "networkId": 59,
        "nativeCurrency": {
            "name": "EOS",
            "symbol": "EOS",
            "decimals": 18
        },
        "rpc": [
            "https://api.eosargentina.io"
        ],
        "infoURL": "https://eoscommunity.org/"
    },
    {
        "name": "Ethereum Classic Mainnet",
        "chainId": 61,
        "shortName": "etc",
        "networkId": 1,
        "nativeCurrency": {
            "name": "Ethereum Classic Ether",
            "symbol": "ETC",
            "decimals": 18
        },
        "rpc": [
            "https://www.ethercluster.com/etc"
        ],
        "infoURL": "https://ethereumclassic.org"
    },
    {
        "name": "Ethereum Classic Testnet Morden",
        "chainId": 62,
        "shortName": "tetc",
        "networkId": 2,
        "nativeCurrency": {
            "name": "Ethereum Classic Testnet Ether",
            "symbol": "TETC",
            "decimals": 18
        },
        "rpc": [],
        "infoURL": "https://ethereumclassic.org"
    },
    {
        "name": "Ethereum Classic Testnet Mordor",
        "chainId": 63,
        "shortName": "metc",
        "networkId": 7,
        "nativeCurrency": {
            "name": "Mordor Classic Testnet Ether",
            "symbol": "METC",
            "decimals": 18
        },
        "rpc": [
            "https://www.ethercluster.com/mordor"
        ],
        "infoURL": "https://github.com/eth-classic/mordor/"
    },
    {
        "name": "OKExChain Testnet",
        "chainId": 65,
        "shortName": "tokt",
        "networkId": 65,
        "nativeCurrency": {
            "name": "OKExChain Global Utility Token in testnet",
            "symbol": "OKT",
            "decimals": 18
        },
        "rpc": [
            "https://exchaintestrpc.okex.org"
        ],
        "infoURL": "https://www.okex.com/okexchain"
    },
    {
        "name": "OKXChain Mainnet",
        "chainId": 66,
        "shortName": "okt",
        "networkId": 66,
        "nativeCurrency": {
            "name": "OKXChain Global Utility Token",
            "symbol": "OKT",
            "decimals": 18
        },
        "rpc": [
            "https://exchainrpc.okex.org",
            "https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff"
        ],
        "infoURL": "https://www.okex.com/okc"
    },
    {
        "name": "Optimism Kovan",
        "chainId": 69,
        "shortName": "okov",
        "networkId": 69,
        "nativeCurrency": {
            "name": "Kovan Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://kovan.optimism.io/"
        ],
        "infoURL": "https://optimism.io"
    },
    {
        "name": "Binance Smart Chain Testnet",
        "chainId": 97,
        "shortName": "bnbt",
        "networkId": 97,
        "nativeCurrency": {
            "name": "Binance Chain Native Token",
            "symbol": "tBNB",
            "decimals": 18
        },
        "rpc": [
            "https://data-seed-prebsc-1-s1.binance.org:8545",
            "https://data-seed-prebsc-2-s1.binance.org:8545",
            "https://data-seed-prebsc-1-s2.binance.org:8545",
            "https://data-seed-prebsc-2-s2.binance.org:8545",
            "https://data-seed-prebsc-1-s3.binance.org:8545",
            "https://data-seed-prebsc-2-s3.binance.org:8545"
        ],
        "infoURL": "https://testnet.binance.org/"
    },
    {
        "name": "Gnosis",
        "chainId": 100,
        "shortName": "gno",
        "networkId": 100,
        "nativeCurrency": {
            "name": "xDAI",
            "symbol": "xDAI",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.gnosischain.com",
            "https://rpc.ankr.com/gnosis",
            "https://gnosischain-rpc.gateway.pokt.network",
            "https://gnosis-mainnet.public.blastapi.io",
            "wss://rpc.gnosischain.com/wss"
        ],
        "infoURL": "https://docs.gnosischain.com"
    },
    {
        "name": "EtherLite Chain",
        "chainId": 111,
        "shortName": "ETL",
        "networkId": 111,
        "nativeCurrency": {
            "name": "EtherLite",
            "symbol": "ETL",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.etherlite.org"
        ],
        "infoURL": "https://etherlite.org"
    },
    {
        "name": "Fuse Mainnet",
        "chainId": 122,
        "shortName": "fuse",
        "networkId": 122,
        "nativeCurrency": {
            "name": "Fuse",
            "symbol": "FUSE",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.fuse.io"
        ],
        "infoURL": "https://fuse.io/"
    },
    {
        "name": "Fuse Sparknet",
        "chainId": 123,
        "shortName": "spark",
        "networkId": 123,
        "nativeCurrency": {
            "name": "Spark",
            "symbol": "SPARK",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.fusespark.io"
        ],
        "infoURL": "https://docs.fuse.io/general/fuse-network-blockchain/fuse-testnet"
    },
    {
        "name": "Polygon Mainnet",
        "chainId": 137,
        "shortName": "matic",
        "networkId": 137,
        "nativeCurrency": {
            "name": "MATIC",
            "symbol": "MATIC",
            "decimals": 18
        },
        "rpc": [
            "https://polygon-rpc.com/",
            "https://rpc-mainnet.matic.network",
            "https://matic-mainnet.chainstacklabs.com",
            "https://rpc-mainnet.maticvigil.com",
            "https://rpc-mainnet.matic.quiknode.pro",
            "https://matic-mainnet-full-rpc.bwarelabs.com",
            "https://polygon-bor.publicnode.com"
        ],
        "infoURL": "https://polygon.technology/"
    },
    //{
    //    "name": "Arbitrum on xDai",
    //    "chainId": 200,
    //    "shortName": "aox",
    //    "networkId": 200,
    //    "nativeCurrency": {
    //        "name": "xDAI",
    //        "symbol": "xDAI",
    //        "decimals": 18
    //    },
    //    "rpc": [
    //        "https://arbitrum.xdaichain.com/"
    //    ],
    //    "infoURL": "https://xdaichain.com"
    //},
    {
        "name": "Fantom Opera",
        "chainId": 250,
        "shortName": "ftm",
        "networkId": 250,
        "nativeCurrency": {
            "name": "Fantom",
            "symbol": "FTM",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.ftm.tools"
        ],
        "infoURL": "https://fantom.foundation"
    },
    {
        "name": "Huobi ECO Chain Testnet",
        "chainId": 256,
        "shortName": "hecot",
        "networkId": 256,
        "nativeCurrency": {
            "name": "Huobi ECO Chain Test Native Token",
            "symbol": "htt",
            "decimals": 18
        },
        "rpc": [
            "https://http-testnet.hecochain.com",
            "wss://ws-testnet.hecochain.com"
        ],
        "infoURL": "https://testnet.hecoinfo.com"
    },
    {
        "name": "zkSync alpha testnet",
        "chainId": 280,
        "shortName": "zksync-goerli",
        "networkId": 280,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://zksync2-testnet.zksync.dev"
        ],
        "infoURL": "https://v2-docs.zksync.io/"
    },
    {
        "name": "Optimism on Gnosis",
        "chainId": 300,
        "shortName": "ogc",
        "networkId": 300,
        "nativeCurrency": {
            "name": "xDAI",
            "symbol": "xDAI",
            "decimals": 18
        },
        "rpc": [
            "https://optimism.gnosischain.com",
            "wss://optimism.gnosischain.com/wss"
        ],
        "infoURL": "https://www.xdaichain.com/for-developers/optimism-optimistic-rollups-on-gc"
    },
    //{
    //    "name": "Filecoin - Mainnet",
    //    "chainId": 314,
    //    "shortName": "filecoin",
    //    "networkId": 314,
    //    "nativeCurrency": {
    //        "name": "filecoin",
    //        "symbol": "FIL",
    //        "decimals": 18
    //    },
    //    "rpc": [
    //        "https://api.node.glif.io/rpc/v0"
    //    ],
    //    "infoURL": "https://filecoin.io"
    //},
    //{
    //    "name": "zkSync v2",
    //    "chainId": 324,
    //    "shortName": "zksync",
    //    "networkId": 324,
    //    "nativeCurrency": {
    //        "name": "Ether",
    //        "symbol": "ETH",
    //        "decimals": 18
    //    },
    //    "rpc": [],
    //    "infoURL": "https://zksync.io/"
    //},
    {
        "name": "Theta Mainnet",
        "chainId": 361,
        "shortName": "theta-mainnet",
        "networkId": 361,
        "nativeCurrency": {
            "name": "Theta Fuel",
            "symbol": "TFUEL",
            "decimals": 18
        },
        "rpc": [
            "https://eth-rpc-api.thetatoken.org/rpc"
        ],
        "infoURL": "https://www.thetatoken.org/"
    },
    {
        "name": "Theta Sapphire Testnet",
        "chainId": 363,
        "shortName": "theta-sapphire",
        "networkId": 363,
        "nativeCurrency": {
            "name": "Theta Fuel",
            "symbol": "TFUEL",
            "decimals": 18
        },
        "rpc": [
            "https://eth-rpc-api-sapphire.thetatoken.org/rpc"
        ],
        "infoURL": "https://www.thetatoken.org/"
    },
    {
        "name": "Theta Amber Testnet",
        "chainId": 364,
        "shortName": "theta-amber",
        "networkId": 364,
        "nativeCurrency": {
            "name": "Theta Fuel",
            "symbol": "TFUEL",
            "decimals": 18
        },
        "rpc": [
            "https://eth-rpc-api-amber.thetatoken.org/rpc"
        ],
        "infoURL": "https://www.thetatoken.org/"
    },
    {
        "name": "Theta Testnet",
        "chainId": 365,
        "shortName": "theta-testnet",
        "networkId": 365,
        "nativeCurrency": {
            "name": "Theta Fuel",
            "symbol": "TFUEL",
            "decimals": 18
        },
        "rpc": [
            "https://eth-rpc-api-testnet.thetatoken.org/rpc"
        ],
        "infoURL": "https://www.thetatoken.org/"
    },
    {
        "name": "Optimism Goerli Testnet",
        "chainId": 420,
        "shortName": "ogor",
        "networkId": 420,
        "nativeCurrency": {
            "name": "Goerli Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://goerli.optimism.io/"
        ],
        "infoURL": "https://optimism.io"
    },
    {
        "name": "Dogechain Testnet",
        "chainId": 568,
        "shortName": "dct",
        "networkId": 568,
        "nativeCurrency": {
            "name": "Dogecoin",
            "symbol": "DOGE",
            "decimals": 18
        },
        "rpc": [
            "https://rpc-testnet.dogechain.dog"
        ],
        "infoURL": "https://dogechain.dog"
    },
    {
        "name": "Dogechain Mainnet",
        "chainId": 2000,
        "shortName": "dc",
        "networkId": 2000,
        "nativeCurrency": {
            "name": "Dogecoin",
            "symbol": "DOGE",
            "decimals": 18
        },
        "rpc": [
            "https://rpc-sg.dogechain.dog",
            "https://rpc-us.dogechain.dog",
            "https://rpc.dogechain.dog",
            "https://rpc01-sg.dogechain.dog",
            "https://rpc02-sg.dogechain.dog",
            "https://rpc03-sg.dogechain.dog"
        ],
        "infoURL": "https://dogechain.dog"
    },
    {
        "name": "Fantom Testnet",
        "chainId": 4002,
        "shortName": "tftm",
        "networkId": 4002,
        "nativeCurrency": {
            "name": "Fantom",
            "symbol": "FTM",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.testnet.fantom.network"
        ],
        "infoURL": "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet"
    },
    //{
    //    "name": "Scroll",
    //    "chainId": 534352,
    //    "shortName": "scr",
    //    "networkId": 534352,
    //    "nativeCurrency": {
    //        "name": "Ether",
    //        "symbol": "ETH",
    //        "decimals": 18
    //    },
    //    "rpc": [],
    //    "infoURL": "https://scroll.io"
    //},
    //{
    //    "name": "Scroll Goerli Testnet",
    //    "chainId": 534353,
    //    "shortName": "scr-goerli",
    //    "networkId": 534353,
    //    "nativeCurrency": {
    //        "name": "Ether",
    //        "symbol": "ETH",
    //        "decimals": 18
    //    },
    //    "rpc": [],
    //    "infoURL": "https://scroll.io"
    //},
    //{
    //    "name": "Scroll Pre-Alpha Testnet",
    //    "chainId": 534354,
    //    "shortName": "scr-prealpha",
    //    "networkId": 534354,
    //    "nativeCurrency": {
    //        "name": "Ether",
    //        "symbol": "ETH",
    //        "decimals": 18
    //    },
    //    "rpc": [
    //        "https://prealpha.scroll.io/l2"
    //    ],
    //    "infoURL": "https://scroll.io"
    //},
    {
        "name": "Evmos Testnet",
        "chainId": 9000,
        "shortName": "evmos-testnet",
        "networkId": 9000,
        "nativeCurrency": {
            "name": "test-Evmos",
            "symbol": "tEVMOS",
            "decimals": 18
        },
        "rpc": [
            "https://eth.bd.evmos.dev:8545"
        ],
        "infoURL": "https://evmos.org"
    },
    {
        "name": "Evmos",
        "chainId": 9001,
        "shortName": "evmos",
        "networkId": 9001,
        "nativeCurrency": {
            "name": "Evmos",
            "symbol": "EVMOS",
            "decimals": 18
        },
        "rpc": [
            "https://eth.bd.evmos.org:8545",
            "https://evmos-evm.publicnode.com"
        ],
        "infoURL": "https://evmos.org"
    },
    {
        "name": "Moonbeam",
        "chainId": 1284,
        "shortName": "mbeam",
        "networkId": 1284,
        "nativeCurrency": {
            "name": "Glimmer",
            "symbol": "GLMR",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.api.moonbeam.network",
            "wss://wss.api.moonbeam.network"
        ],
        "infoURL": "https://moonbeam.network/networks/moonbeam/"
    },
    {
        "name": "Moonriver",
        "chainId": 1285,
        "shortName": "mriver",
        "networkId": 1285,
        "nativeCurrency": {
            "name": "Moonriver",
            "symbol": "MOVR",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.api.moonriver.moonbeam.network",
            "wss://wss.api.moonriver.moonbeam.network"
        ],
        "infoURL": "https://moonbeam.network/networks/moonriver/"
    },
    {
        "name": "Cronos Mainnet Beta",
        "chainId": 25,
        "shortName": "cro",
        "networkId": 25,
        "nativeCurrency": {
            "name": "Cronos",
            "symbol": "CRO",
            "decimals": 18
        },
        "rpc": [
            "https://evm.cronos.org"
        ],
        "infoURL": "https://cronos.org/"
    },
    {
        "name": "Cronos Testnet",
        "chainId": 338,
        "shortName": "tcro",
        "networkId": 338,
        "nativeCurrency": {
            "name": "Cronos Test Coin",
            "symbol": "TCRO",
            "decimals": 18
        },
        "rpc": [
            "https://evm-t3.cronos.org"
        ],
        "infoURL": "https://cronos.org"
    },
    {
        "name": "Klaytn Testnet Baobab",
        "chainId": 1001,
        "shortName": "Baobab",
        "networkId": 1001,
        "nativeCurrency": {
            "name": "KLAY",
            "symbol": "KLAY",
            "decimals": 18
        },
        "rpc": [
            "https://api.baobab.klaytn.net:8651"
        ],
        "infoURL": "https://www.klaytn.com/"
    },
    {
        "name": "Klaytn Mainnet Cypress",
        "chainId": 8217,
        "shortName": "Cypress",
        "networkId": 8217,
        "nativeCurrency": {
            "name": "KLAY",
            "symbol": "KLAY",
            "decimals": 18
        },
        "rpc": [
            "https://public-node-api.klaytnapi.com/v1/cypress"
        ],
        "infoURL": "https://www.klaytn.com/"
    },
    {
        "name": "Fusion Mainnet",
        "chainId": 32659,
        "shortName": "fsn",
        "networkId": 32659,
        "nativeCurrency": {
            "name": "Fusion",
            "symbol": "FSN",
            "decimals": 18
        },
        "rpc": [
            "https://mainnet.anyswap.exchange",
            "https://fsn.dev/api"
        ],
        "infoURL": "https://www.fusion.org/"
    },
    {
        "name": "Celo Mainnet",
        "chainId": 42220,
        "shortName": "celo",
        "networkId": 42220,
        "nativeCurrency": {
            "name": "CELO",
            "symbol": "CELO",
            "decimals": 18
        },
        "rpc": [
            "https://forno.celo.org",
            "wss://forno.celo.org/ws"
        ],
        "infoURL": "https://docs.celo.org/"
    },
    {
        "name": "Celo Alfajores Testnet",
        "chainId": 44787,
        "shortName": "ALFA",
        "networkId": 44787,
        "nativeCurrency": {
            "name": "CELO",
            "symbol": "CELO",
            "decimals": 18
        },
        "rpc": [
            "https://alfajores-forno.celo-testnet.org",
            "wss://alfajores-forno.celo-testnet.org/ws"
        ],
        "infoURL": "https://docs.celo.org/"
    },
    {
        "name": "Celo Baklava Testnet",
        "chainId": 62320,
        "shortName": "BKLV",
        "networkId": 62320,
        "nativeCurrency": {
            "name": "CELO",
            "symbol": "CELO",
            "decimals": 18
        },
        "rpc": [
            "https://baklava-forno.celo-testnet.org"
        ],
        "infoURL": "https://docs.celo.org/"
    },
    {
        "name": "Aurora Mainnet",
        "chainId": 1313161554,
        "shortName": "aurora",
        "networkId": 1313161554,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://mainnet.aurora.dev"
        ],
        "faucets": [],
        "infoURL": "https://aurora.dev"
    },
    {
        "name": "Aurora Testnet",
        "chainId": 1313161555,
        "shortName": "aurora-testnet",
        "networkId": 1313161555,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://testnet.aurora.dev/"
        ],
        "faucets": [],
        "infoURL": "https://aurora.dev"
    },
    //{
    //    "name": "Aurora Betanet",
    //    "chainId": 1313161556,
    //    "shortName": "aurora-betanet",
    //    "networkId": 1313161556,
    //    "nativeCurrency": {
    //        "name": "Ether",
    //        "symbol": "ETH",
    //        "decimals": 18
    //    },
    //    "rpc": [],
    //    "faucets": [],
    //    "infoURL": "https://aurora.dev"
    //},
    {
        "name": "Arbitrum One",
        "chainId": 42161,
        "shortName": "arb1",
        "networkId": 42161,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            `https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}`,
            "https://arb1.arbitrum.io/rpc"
        ],
        "infoURL": "https://arbitrum.io"
    },
    {
        "name": "Arbitrum Nova",
        "chainId": 42170,
        "shortName": "arb-nova",
        "networkId": 42170,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://nova.arbitrum.io/rpc"
        ],
        "infoURL": "https://arbitrum.io"
    },
    {
        "name": "Arbitrum Rinkeby",
        "chainId": 421611,
        "shortName": "arb-rinkeby",
        "networkId": 421611,
        "nativeCurrency": {
            "name": "Arbitrum Rinkeby Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://rinkeby.arbitrum.io/rpc"
        ],
        "infoURL": "https://arbitrum.io"
    },
    {
        "name": "Arbitrum Goerli",
        "chainId": 421613,
        "shortName": "arb-goerli",
        "networkId": 421613,
        "nativeCurrency": {
            "name": "Arbitrum Goerli Ether",
            "symbol": "AGOR",
            "decimals": 18
        },
        "rpc": [
            "https://goerli-rollup.arbitrum.io/rpc/"
        ],
        "infoURL": "https://arbitrum.io/"
    },
    {
        "name": "Polygon zkEVM Testnet",
        "chainId": 1402,
        "shortName": "zkevmtest",
        "networkId": 1402,
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpc": [
            "https://rpc.public.zkevm-test.net"
        ],
        "infoURL": "https://polygon.technology/solutions/polygon-zkevm/"
    },
    {
        "name": "Mumbai",
        "chainId": 80001,
        "shortName": "maticmum",
        "networkId": 80001,
        "nativeCurrency": {
            "name": "MATIC",
            "symbol": "MATIC",
            "decimals": 18
        },
        "rpc": [
            "https://matic-mumbai.chainstacklabs.com",
            "https://rpc-mumbai.maticvigil.com",
            "https://matic-testnet-archive-rpc.bwarelabs.com"
        ],
        "infoURL": "https://polygon.technology/"
    },
    {
        "name": "Avalanche C-Chain",
        "chainId": 43114,
        "shortName": "avax",
        "networkId": 43114,
        "nativeCurrency": {
            "name": "Avalanche",
            "symbol": "AVAX",
            "decimals": 18
        },
        "rpc": [
            "https://api.avax.network/ext/bc/C/rpc"
        ],
        "infoURL": "https://www.avax.network/"
    },
    {
        "name": "Avalanche Fuji Testnet",
        "chainId": 43113,
        "shortName": "Fuji",
        "networkId": 1,
        "nativeCurrency": {
            "name": "Avalanche",
            "symbol": "AVAX",
            "decimals": 18
        },
        "rpc": [
            "https://api.avax-test.network/ext/bc/C/rpc"
        ],
        "infoURL": "https://cchain.explorer.avax-test.network"
    },
    {
        "name": "Boba Avax",
        "chainId": 43288,
        "shortName": "bobaavax",
        "networkId": 43288,
        "nativeCurrency": {
            "name": "Boba Token",
            "symbol": "BOBA",
            "decimals": 18
        },
        "rpc": [
            "https://avax.boba.network",
            "wss://wss.avax.boba.network",
            "https://replica.avax.boba.network",
            "wss://replica-wss.avax.boba.network"
        ],
        "infoURL": "https://docs.boba.network/for-developers/network-avalanche"
    },
];
