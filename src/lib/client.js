import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    projectId: 'upaoaqzl',
    dataset: 'production',
    apiVersion: '2022-08-25',
    token: "skFgVrvEAumCRoySg26pynjuGtB3XM4ku2ES9pt9k8r9ZgmLyquAKsrmxT6EX56xfGJcpROnIs1SszVdkqew0hQxx2HBabBRVRe0ubTeFLFx6UnnqFRCRQhNX21N6bzXO3EFoEb3JeDFYfpK9yb39Q5SVjGf8PMJA4mVAQ0E8oQ1yNKhlJpk",
    useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
