import axios from 'axios';
import { addToCartIntegration } from "./HTTPServices";

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Test the HTTPServices methods', () => {

    test('should call the addToCartIntegration with the right URL.', async () => {
        //given
        const products = [{name: 'Eggs'}];
        const resp = {data: products};
        mockedAxios.get.mockResolvedValue(resp);
        //mockedAxios.get.mockRejectedValue('Network error');
        //then
        await addToCartIntegration("123_2,456_1")
        //expect
        expect(mockedAxios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_BASE_URL_ADD_TO_CART}/0/2?items=123_2,456_1&veh=aff&sourceid=imp_Xk1U1eWRkxyJRw3wUx0Mo38zUkix7TWhry3qyg0&veh=aff&wmlspartner=imp_1789939&clickid=Xk1U1eWRkxyJRw3wUx0Mo38zUkix7TWhry3qyg0`);
    });
    
})
