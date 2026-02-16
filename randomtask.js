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

