for i in $(seq 0 1635); do res=$(grep -L "\"index\": $i," json/28.json); if [ -n "$res" ]; then echo "Address $i never been used"; fi; done
