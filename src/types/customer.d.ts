export type TransactionType = {
transactionId: string;
amount: number;
	date: string;
};

export type ProductsType = {
	transactionId: string;
	id: number;
	name: string;
	image: string;
	price: number;
	quantity: number;
};

export type CustomerType = {
	id: number;
	fullName: string;
	email: string;
	phoneNumber: string;
	transactions: TransactionType[];
	productsOwned: ProductsType[];
};
