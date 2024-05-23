namespace UserNamespace {
    export type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
    }
}

function createOrUpdateUser(initialValues: Partial<UserNamespace.User>) {
  // Оновлення користувача
  console.log(initialValues);
}

// Виклик функції з частковим набором даних
createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
