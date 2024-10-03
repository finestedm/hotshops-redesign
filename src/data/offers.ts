export type TOffer = {
    product: string;
    description: string;
    originalPrice: number;
    originalPriceCurrency: string;
    discountedPrice: number;
    shippedFrom: string;
    shippingPrice: number;
    shippingPriceCurrency: string;
    tags: string[];
    temperature: number;
    offerTime: {
        from: string;
        to: string;
    };
};

export type TOffers = TOffer[]

const offers: TOffers = [
    {
        product: 'Playstation 5',
        description: 'nowa konsola dostępna w sprzedaży',
        originalPrice: 999,
        originalPriceCurrency: 'PLN',
        discountedPrice: 725,
        shippedFrom: 'Poland',
        shippingPrice: 22,
        shippingPriceCurrency: 'PLN',
        tags: ['Elektronika', 'Rozrywka', 'Konsole'],
        temperature: 123,
        offerTime: {
            from: '16/12/2024',
            to: '24/12/2024'
        }
    },
    {
        product: 'Samsung Galaxy S23',
        description: 'najnowszy smartfon z aparatem 200MP',
        originalPrice: 3999,
        originalPriceCurrency: 'PLN',
        discountedPrice: 2999,
        shippedFrom: 'Poland',
        shippingPrice: 15,
        shippingPriceCurrency: 'PLN',
        tags: ['Elektronika', 'Telefony', 'Smartfony'],
        temperature: 98,
        offerTime: {
            from: '01/11/2024',
            to: '15/11/2024'
        }
    },
    {
        product: 'Apple MacBook Air M2',
        description: 'lekki laptop z nowym procesorem M2',
        originalPrice: 5999,
        originalPriceCurrency: 'PLN',
        discountedPrice: 4999,
        shippedFrom: 'Poland',
        shippingPrice: 20,
        shippingPriceCurrency: 'PLN',
        tags: ['Elektronika', 'Komputery', 'Laptopy'],
        temperature: 75,
        offerTime: {
            from: '05/10/2024',
            to: '20/10/2024'
        }
    }
];


export default offers