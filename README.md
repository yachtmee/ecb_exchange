<p align="center">
    <img src="res/yachtmee.png?raw=true" width="90"/>
</p>

# ECB-EXCHANGE

A minimalist lib for 
[Euro foreign exchange reference rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)

Author: nestor <nestor@yachtmee.com>

Copyright: © 2020, yachtmee

Date: 2020-09-20

Version: 0.1.1

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
  import { Ecb } from "http://github.com/yachtmee/mod.ts";
  let currencies = await Ecb.fetchdatas();
  // console.log(currencies);
  assert(r instanceof Map);
```

Gitlab Import
```typescript
  import { Ecb } from "http://gitlab.com/yachtmee/mod.ts";
  let currencies = await Ecb.fetchdatas();
  // console.log(currencies);
  assert(r instanceof Map);
```


## License

The data in `_data` is free to use without restriction. For clarity these files, and contributions to these files, are released under [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/).

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
