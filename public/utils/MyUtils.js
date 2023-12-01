export function checkUserOS(arr) {
  if (arr?.length === 0) {
    return false;
  }
  const userAgent = window.navigator.userAgent;

  for (const item of arr) {
    if (userAgent.indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
}

export function makeLineBreakByString(text) {
  if (text.trim() === "" || !text) {
    return "";
  }

  let result = text.replace(/<br>/g, "\n");
  result = result.replace(/<br \/>/g, "\n");

  return result;
}

export function checkIsURL(text) {
  if (text.indexOf("http://") > -1 || text.indexOf("https://") > -1) {
    return (
      <a
        href={text}
        target="_blank"
        style={{ color: "#4192DC", fontWeight: "bold" }}
      >
        {text}
      </a>
    );
  }

  return text;
}
