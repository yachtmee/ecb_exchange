import { Ecb } from "./mod.ts";
import { mapc } from "./currencies.ts";
import { assert } from "https://deno.land/std@0.70.0/testing/asserts.ts";

Deno.test("#Class Ecb", async () => {
  let r = await Ecb.fetchdatas();
  // console.log(r);
  // assert(r = true);
  assert(r instanceof Map);
});

Deno.test("#currencies.ts", async () => {
  assert(mapc.has("VEF"));
  assert(mapc instanceof Map);
});