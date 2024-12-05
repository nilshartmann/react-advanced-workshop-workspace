import {queryOptions} from "@tanstack/react-query";
import {taskApiKy} from "../task-api-ky.ts";
import {InsightSchema} from "../types.ts";

export const insightQueryOptions = (taskId: string) => queryOptions({
	queryKey: ["tasks", taskId, "insights"],
	async queryFn() {
		const response = await taskApiKy.get(`api/tasks/${taskId}/insights`).json();
		return InsightSchema.array().parse(response);
	}
})