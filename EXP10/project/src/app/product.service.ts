import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    private products: Product[] = [
        {
            id: 1,
            name: "Samsung Galaxy S24 Ultra 5G",
            price: "₹1,29,999",
            imageUrl: "s24.png",
            description:
                "Experience cutting-edge technology with the Samsung Galaxy S24 Ultra 5G in Titanium Violet, featuring 12GB RAM and 256GB storage for unmatched performance and style."
        },
        {
            id: 2,
            name: "Samsung Galaxy Z Flip3 5G",
            price: "₹62,999",
            imageUrl: "zFlip3.png",
            description:
                "Discover elegance and innovation with the Samsung Galaxy Z Flip3 5G in Pink Gold, offering 8GB RAM and 128GB storage for seamless modern living."
        },
        {
            id: 3,
            name: "Samsung Galaxy S21 FE 5G",
            price: "₹54,999",
            imageUrl: "s21FE.png",
            description:
                "Enjoy flagship features with the Samsung Galaxy S21 FE 5G, boasting a vibrant 6.4-inch display, 8GB RAM, and 128GB storage."
        },
        {
            id: 4,
            name: "Samsung Galaxy Tab S8 Ultra",
            price: "₹1,24,999",
            imageUrl: "tabS8Ultra.png",
            description:
                "Unleash productivity with the Samsung Galaxy Tab S8 Ultra, featuring a stunning 14.6-inch Super AMOLED display and S Pen support."
        },
        {
            id: 5,
            name: "Samsung Galaxy Watch 5",
            price: "₹38,999",
            imageUrl: "watch5.png",
            description:
                "Stay connected and fit with the Samsung Galaxy Watch 5, offering advanced health monitoring and a sleek design."
        },
        {
            id: 6,
            name: "Samsung Galaxy Buds Live",
            price: "₹9,999",
            imageUrl: "budsLive.png",
            description:
                "Immerse yourself in clear sound with the Samsung Galaxy Buds Live, featuring ergonomic design and Active Noise Cancellation."
        },
        {
            id: 7,
            name: "Samsung Odyssey G7 Curved Gaming Monitor",
            price: "₹69,999",
            imageUrl: "odysseyG7.png",
            description:
                "Experience immersive gaming with the Samsung Odyssey G7 Curved Gaming Monitor, boasting a 27-inch QLED screen and 240Hz refresh rate."
        },
        {
            id: 8,
            name: "Samsung Galaxy Book Pro 360",
            price: "₹1,29,999",
            imageUrl: "bookPro360.png",
            description:
                "Achieve productivity on the go with the Samsung Galaxy Book Pro 360, featuring a 13.3-inch AMOLED touchscreen and Intel Evo platform."
        },
        // {
        //     id: 9,
        //     name: "Samsung The Frame 2022 QLED 4K Smart TV",
        //     price: "₹1,49,999",
        //     imageUrl: "theFrame2022.png",
        //     description:
        //         "Transform your living space with art and entertainment with the Samsung The Frame 2022 QLED 4K Smart TV, blending aesthetics and technology."
        // },
        // {
        //     id: 10,
        //     name: "Samsung HW-Q800A Soundbar",
        //     price: "₹54,999",
        //     imageUrl: "hwq800a.png",
        //     description:
        //         "Elevate your audio experience with the Samsung HW-Q800A Soundbar, featuring Dolby Atmos, DTS:X, and Acoustic Beam technology."
        // },
        // {
        //     id: 11,
        //     name: "Samsung Portable SSD X5",
        //     price: "₹29,999",
        //     imageUrl: "portableSSDX5.png",
        //     description:
        //         "Speed up your data transfer with the Samsung Portable SSD X5, offering lightning-fast NVMe interface and Thunderbolt 3 connectivity."
        // },
        // {
        //     id: 12,
        //     name: "Samsung JetBot 90 AI+ Robot Vacuum",
        //     price: "₹69,999",
        //     imageUrl: "jetBot90.png",
        //     description:
        //         "Keep your floors clean effortlessly with the Samsung JetBot 90 AI+ Robot Vacuum, equipped with AI-based obstacle avoidance and Wi-Fi connectivity."
        // }
    ];

    getProducts(): Product[] {
        return this.products;
    }
}
