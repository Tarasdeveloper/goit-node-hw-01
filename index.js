const contactActions = require('./contacts');
const { Command } = require('commander');

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactActions.listContacts();
      return console.log(allContacts);
    case 'get':
      const getContact = await contactActions.getContactById(id);
      return console.log(getContact);
    case 'add':
      const addOneContact = await contactActions.addContact(name, email, phone);
      return console.log(addOneContact);
    case 'remove':
      const deleteContact = await contactActions.removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction(argv);
// invokeAction({ action: 'get', id: 'qdggE76Jtbfd9eWJHrssH' });
// invokeAction({
//   action: 'add',
//   name: 'Tom',
//   email: 'my@mail.com',
//   phone: '(123) 555-1234',
// });
invokeAction({ action: 'remove', id: '4jOT1Mm2LmQ2jDfHhx4i_' });
