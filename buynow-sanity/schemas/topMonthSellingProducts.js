export default {
    name: "topMonthSellingProudcts",
    title: "Top Month Selling Products",
    type: "document",
    fields: [
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {type: "image"}
            ],
            options: { hotspot: true },
        },
        {
            name: "productName",
            title: "Product Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "productName",
                maxLength: 99,
            }
        },
        {
            name: "thumbanails",
            title: "Thumbanail",
            type: "array",
            of: [
                {type: "image"}
            ],
            options: { hotspot: true },
        },
        {
            name: "price",
            title: "Product Price",
            type: "number"
        },
        {
            name: "description",
            title: "Product Description",
            type: "string"
        },
        {
            name: "stocks",
            title: "Product Stocks",
            type: "number"
        },
        {
            name: "catagory",
            title: "Product Catagory",
            type: "string"
        },
        {
            name: "tags",
            title: "Product Tags",
            type: "array",
            of: [
                { type: "string" }
            ]
        },
        {
            name: "sizes",
            title: "Product Sizes",
            type: "array",
            of: [{
                    type: "object",
                    fields: [
                        {
                            name: "productSize",
                            title: "Size",
                            type: "string",
                        },
                        {
                            name: "bust",
                            title: "Bust",
                            type: "string",
                        },
                        {
                            name: "waist",
                            title: "Waist",
                            type: "string",
                        },
                        {
                            name: "hip",
                            title: "Hip",
                            type: "string",
                        },
                    ]
                },
            ]
        },
        {
            name: "code",
            title: "Product Code",
            type: "string"
        },
        {
            name: "offer",
            title: "Product Offer",
            type: "number"
        },
        {
            name: "colors",
            title: "Product Color",
            type: "array",
            of: [
                { type: "string" }
            ]
        },
        {
            name: "brand",
            title: "Product Brand",
            type: "string",
        }
    ]
}