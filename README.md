# DEX
An Automated Market Maker Decentralized Exchange Protocol

## Documentation

- COMPILE:

    ```$ truffle compile```

    Move the WBN.sol and RouterV2.sol contracts to root, change the compiler settings in truffle-config.js to version 0.5.16 then first compile the factory contract.
    
    After that, move the FactoryV2.sol contract to root and move the WBN.sol and RouterV2.sol contracts to the contracts folder.
    
    Change the compiler settings in truffle-config.js to version 0.6.6 then compile the Router and WBNB contracts


- DEPLOY:
    ```$ truffle migrate --reset```
    
    After sucessfully compiling all the contracts, the use the command above to deploy to development blockchain (Ganache)
    
    Alternatively you can use the commands below to deploy to public network of your choice
    
        ```$ truffle migrate --reset --network mainnet```
        
        ```$ truffle migrate --reset --network rinkeby```
        
        ```$ truffle migrate --reset --network ropsten```
        
        ```$ truffle migrate --reset --network kovan```
