import {afterAll, afterEach, beforeAll, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import InsightForm from "./InsightForm.tsx";
import {createQueryClient} from "../create-query-client.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {userEvent} from "@testing-library/user-event";
import {http, HttpResponse} from "msw";
import {setupServer} from "msw/node";


const handlers = [
	http.post("http://localhost:3002/api/tasks/3/insights", async (x) => {
		return HttpResponse.json({});
	}),
];

const server = setupServer(...handlers);
// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());


test("insight form works", async () => {
	const queryClient = createQueryClient();
	render(
		<QueryClientProvider client={queryClient}>
			<InsightForm taskId={"3"}/>);
		</QueryClientProvider>
	)

	const user = userEvent.setup();

	screen.getByText("Add new insight");

	await user.type(screen.getByRole("textbox", {name: /author/i}),
		"Klaus");

	await user.type(screen.getByRole("textbox", {name: /text/i}),
		"Halli hallo");

	await user.type(screen.getByRole("spinbutton", {name: /confidence/i}),
		"1");

	await user.click(screen.getByRole("button", {name: /save/i}));

	await screen.findByText(/Hurra! HAt geklappt!/i);

	// expect(screen.getByRole("textbox", {name: /author/i}))
	// 	.toHaveValue("");

});