## install
  -npx react-native init AppName --template https://github.com/huuthinh245/rn-template.git
## Use library
  -react navigation
  -redux observable
  -react-native-config
  -axios
## structure
```
  src/
    @type
      screens.d.ts // define param of stack, bottom tabs 
    constants //define static variable
        api.ts // define static base url from evn
    components // resuse component
        /Swipeout
          index.tsx
          styles.tsx
    container
        Screen //create screen of app
          index.tsx
          styles.ts
    navigation     //set up navigation route 
        index.tsx
        RootNavigation.ts
    network // control api, prefix, header param, logger, should define in APIs.ts
        APIs.ts
        Logger.ts
        APIManager.ts // handle all action method 
    stores //set up redux
        user // should modify function with object like user/order/..
          action
          api
          epic
          models
          reducer
         index.ts
         types.ts
```
## environment 
  - staging, production with mutiple package id (ios/android)
  - check package.json how to run app(only android, run ios with xcode)
  - config url app name, version code, in env (check more library react-native-config)
  - Notification should register two file google service staging, production (both platforms)
  
         
