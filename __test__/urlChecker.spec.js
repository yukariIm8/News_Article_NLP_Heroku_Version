import { checkUrl } from "../src/client/js/urlChecker"
 
describe("Testing the submit functionality", () => {
    test("Testing the checkUrl() function for valid url", () => {
           let url = "https://www.npr.org/2020/08/06/899679852/news-brief-beirut-explosion-trump-on-twitter-and-facebook-national-conventions";
           let response = checkUrl(url);
           expect(response).toBeDefined();
           expect(response).toBe(true);
})});

describe("Testing the submit functionality", () => {
    test("Testing the checkUrl() function for invalid url", () => {
           let url = "It's a sunny day!";
           let response = checkUrl(url);
           expect(response).toBeDefined();
           expect(response).toBe(false);
})});

describe("Testing the submit functionality", () => {
    test("Testing the checkUrl() function for empty string", () => {
           let url = "";
           let response = checkUrl(url);
           expect(response).toBeDefined();
           expect(response).toBe(false);
})});