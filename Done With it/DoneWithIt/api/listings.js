import apiClient from "./client";

const endpoint = "/listings";

const getListings = apiClient.get(endpoint);

//posting in server
const addListings = (listing, upload) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("description", listing.description);
  data.append("categoryId", listing.category.value);
  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "name" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  return apiClient.post(endpoint, data, {
    onUploadProgress: (progress) => upload(progress.loaded / progress.total),
  });
};
export default { getListings, addListings };
