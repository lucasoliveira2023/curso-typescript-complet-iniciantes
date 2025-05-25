//type
type Order = {
    productId: string;
    price: number
};


type User = {
    firstName: string;
    age: number;
    email: string;
    password: string;
    orders: Order[];
    register(): string
};

const user: User = {
    firstName: "John",
    age: 30,
    email: "john.doe@example.com",
    password: "securepassword",
    orders: [{ productId: "prod1", price: 100 }],
    register: () =>{
        return "User registered";
    },
};

const printLog = (message: string) => {}

printLog(user.password!)

//unions
type Author = {
    books: string[];
}

const author: Author & User = {
    age: 2,
    books: ['1'],
    email: "author@example.com",
    firstName: "John",
    orders: [],
    password: "securepassword",
    register() {
        return "Author registered";
    }
}

interface UserInterface {
    readonly firstName: string;
    email: string;
}

const emailUser: UserInterface = {
    email: "felipe@gemail.com",
    firstName: "Felipe",
};

interface AuthorInterface {
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    email: "author@gmail.com",
    firstName: "Author",
    books: []
};

