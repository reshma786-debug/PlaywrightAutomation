

const { test, expect } = require('@playwright/test');

test("Verify API GET request", async ({ request }) =>
    {
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toEqual({
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

    })

})