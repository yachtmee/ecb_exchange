<p align="center">
    <img src="res/yachtmee.png?raw=true" width="90"/>
</p>

# ECB-EXCHANGE

A minimalist deno lib for 
[Euro foreign exchange reference rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)

Author: nestor <nestor@yachtmee.com>

Copyright: © 2020, yachtmee

Date: 2020-09-20

Version: 1.0.0

## About
The reference rates are usually updated around 16:00 CET on every working day, except on TARGET closing days. They are based on a regular daily concertation procedure between central banks across Europe, which normally takes place at 14:15 CET. 

## Usage

import ECB-EXCHANGE deno lib and use it:

Local Import
```typescript
  import { Ecb } from "./mod.ts";
  let currencies = await Ecb.fetchdatas();
  // console.log(currencies);
  assert(r instanceof Map);
```

Github Import
```typescript
  import { Ecb } from "https://raw.githubusercontent.com/yachtmee/ecb-exchange/master/mod.ts";
  let currencies = await Ecb.fetchdatas();
  // console.log(currencies);
  // 
  console.log(currencies.get(''))
  console.log(currencies);
```
