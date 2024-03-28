export default function PostContent({ content }) {
  const parsedContent = new DOMParser().parseFromString(content, "text/html");
  const images = parsedContent.querySelectorAll("img");

  images.forEach((image) => {
    const src = image.getAttribute("src");
    if (src) {
      image.setAttribute("src", src);
      image.setAttribute("alt", "Post Image");
      image.setAttribute("class", "mx-auto");
    }
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: parsedContent.body.innerHTML }} />
  );
}
