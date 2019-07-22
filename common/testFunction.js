// test that the babel plugin will be applied here as well
export default function test() {
  const x = { a: "1" };
  console.log(`x.a:${x?.a} x.b.c:${x?.b?.c}`);
}
