import {
	ApplicationDraftContent,
	SingleConversationContext,
} from "@frontapp/plugin-sdk";
import {
	Avatar,
	Button,
	Divider,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tabs,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";

import db from "@/assets/db.json";
import Input from "@/components/ui/input";
import useGetLatestMessage from "@/hooks/use-get-latest-message";
import { CustomerType, ProductsType, TransactionType } from "@/types";
import { generateRandomId } from "@/utils";

export default function UserProfile({
	context,
}: {
	context: SingleConversationContext;
}) {
	const [customerData, setCustomerData] = useState<CustomerType>({
		id: 0,
		fullName: "",
		email: "",
		phoneNumber: "",
		transactions: [],
		productsOwned: [],
	});

	const latestMessageId = useGetLatestMessage();

	const recipient = context?.conversation.recipient;

	const onCreateDraftClick = useCallback(() => {
		if (!latestMessageId) return;

		const payload: ApplicationDraftContent = {
			body: `Hello ${
				recipient?.name ?? ""
			}! I am currently sending this message to the customer with the ${
				recipient?.type ?? ""
			}: ${recipient?.handle ?? ""}.`,
			type: "text",
		};

		if (typeof context.conversation.draftId !== "undefined") {
			void context.updateDraft(context.conversation.draftId, {
				updateMode: "insert",
				content: payload,
			});
		} else {
			void context.createDraft({
				content: payload,
				replyOptions: {
					type: "replyAll",
					originalMessageId: latestMessageId,
				},
			});
		}
	}, [context, latestMessageId, recipient]);

	useEffect(() => {
		if (context?.conversation && context?.conversation.recipient) {
			const email: string = context.conversation.recipient.handle;
			const customer: CustomerType | undefined = db.customers.find(
				(customer: CustomerType) => customer.email === email,
			);
			if (customer) {
				setCustomerData(customer);
			} else {
				setCustomerData({
					id: 0,
					fullName: "",
					email: "",
					phoneNumber: "",
					transactions: [],
					productsOwned: [],
				});
			}
		}
	}, [context]);

	return (
		<div className="flex w-full flex-col items-center justify-center gap-4 px-4 py-8">
			<h1 className="text-lg font-semibold">Customer information</h1>
			<Divider />
			<Avatar
				name={recipient?.name}
				src={`https://i.pravatar.cc/150?img=${
					customerData.id || generateRandomId()
				}`}
				size="lg"
			/>
			<h1 className="font-medium ">{recipient?.name}</h1>
			<div className="flex w-full flex-col items-center gap-2">
				<Input
					id="email"
					name="email"
					label="Email"
					placeholder="Email"
					value={recipient?.handle || ""}
					readOnly
				/>
				<Input
					id="phone"
					name="phone"
					readOnly
					value={customerData.phoneNumber || "Not available"}
					label="Phone No."
					placeholder="92xxxxxxxx"
				/>
			</div>
			<div className="flex w-full flex-col items-center">
				<Tabs aria-label="Options">
					<Tab key="tx_history" className="w-full" title="Tx history">
						<Table
							selectionMode="single"
							aria-label="Transaction History Table"
						>
							<TableHeader>
								<TableColumn>Transaction Id</TableColumn>
								<TableColumn>Amount</TableColumn>
								<TableColumn>Date</TableColumn>
							</TableHeader>
							<TableBody emptyContent={"No rows to display."}>
								{customerData.transactions.map(
									(transaction: TransactionType) => (
										<TableRow key={transaction?.transactionId}>
											<TableCell>{transaction?.transactionId}</TableCell>
											<TableCell>{transaction?.amount}</TableCell>
											<TableCell>{transaction?.date}</TableCell>
										</TableRow>
									),
								)}
							</TableBody>
						</Table>
					</Tab>
					<Tab key="products" className="w-full" title="Products owned">
						<Table selectionMode="single" aria-label="Products Owned Table">
							<TableHeader>
								<TableColumn>Product Name</TableColumn>
								<TableColumn>Price</TableColumn>
								<TableColumn>Quantity</TableColumn>
							</TableHeader>
							<TableBody emptyContent={"No rows to display."}>
								{customerData.productsOwned.map((product: ProductsType) => (
									<TableRow key={product.id}>
										<TableCell>{product.name}</TableCell>
										<TableCell>${product.price.toFixed(2)}</TableCell>
										<TableCell>{product.quantity}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Tab>
				</Tabs>
			</div>
			<div className="flex gap-2">
				{latestMessageId && (
					<Button color="default" variant="shadow" onClick={onCreateDraftClick}>
						Reply
					</Button>
				)}
			</div>
		</div>
	);
}
