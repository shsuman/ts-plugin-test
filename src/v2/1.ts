interface TestType {
    bar: string;
 }
 
const foo: TestType | undefined = undefined;
const boo = foo.bar; // TS2532: Object is possibly 'undefined'.
