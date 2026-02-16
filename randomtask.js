// 20 object problems (each includes a solution)

// Problem-01: Create an object and add a new property.
{
  const person = { name: 'Ava', age: 21 };
  person.city = 'Seattle';
  console.log('P01', person);
}


// Problem-02: Read a value from a nested object using a path.
{
  const user = { profile: { contact: { email: 'ava@example.com' } } };
  const email = user.profile.contact.email;
  console.log('P02', email);
}


// Problem-03: Update an existing property value.
{
  const settings = { theme: 'light', fontSize: 14 };
  settings.theme = 'dark';
  console.log('P03', settings);
}


// Problem-04: Delete a property from an object.
{
  const cartItem = { id: 7, name: 'Book', coupon: 'SAVE10' };
  delete cartItem.coupon;
  console.log('P04', cartItem);
}


// Problem-05: Check if an object has an own property (not inherited).
{
  const obj = Object.create({ inherited: true });
  obj.own = 123;
  const hasOwn = Object.prototype.hasOwnProperty.call(obj, 'own');
  console.log('P05', hasOwn);
}


// Problem-06: Iterate over an object and build an array of "key:value" strings.
{
  const scores = { a: 10, b: 20, c: 15 };
  const pairs = Object.entries(scores).map(([k, v]) => `${k}:${v}`);
  console.log('P06', pairs);
}


// Problem-07: Find the key with the highest numeric value.
{
  const marks = { math: 86, english: 92, physics: 88 };
  const topSubject = Object.entries(marks).reduce((best, cur) => (cur[1] > best[1] ? cur : best))[0];
  console.log('P07', topSubject);
}


// Problem-08: Add a method that uses `this` to compute a derived value.
{
  const rect = {
    w: 5,
    h: 3,
    area() {
      return this.w * this.h;
    },
  };
  console.log('P08', rect.area());
}


// Problem-09: Use a computed property name to create a dynamic key.
{
  const key = 'status';
  const task = { id: 1, [key]: 'done' };
  console.log('P09', task);
}


// Problem-10: Destructure object properties with a default value.
{
  const config = { retries: 3 };
  const { retries, timeoutMs = 5000 } = config;
  console.log('P10', { retries, timeoutMs });
}


// Problem-11: Merge two objects (later keys override earlier keys).
{
  const base = { host: 'localhost', port: 3000 };
  const override = { port: 8080 };
  const merged = { ...base, ...override };
  console.log('P11', merged);
}


// Problem-12: Create a shallow clone and prove the original is unchanged.
{
  const original = { a: 1, b: 2 };
  const clone = { ...original, b: 99 };
  console.log('P12', { original, clone });
}

