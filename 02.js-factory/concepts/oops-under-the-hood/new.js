function User(username, email) {
  this.username = username;
  this.email = email;
  this.isAdmin = false;
}
const newUser = new User("colt", "colt@gmail.com");
console.log(newUser);
//User { username: 'colt', email: 'colt@gmail.com', isAdmin: false }
