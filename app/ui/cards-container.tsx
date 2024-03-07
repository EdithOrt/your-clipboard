"use client";

import { Card } from "./card";
import { readClipboard } from "../lib/getClipboard";

export function CardsContainer() {
  /* document.addEventListener("copy", (e) => {
    e.preventDefault();
    const selectedText = window.getSelection().toString();
    console.log({ selectedText });
    readClipboard();
  }); */

  const handleClick = () => {
    return console.log("click to close");
  };

  const handleExample = () => {
    return console.log("hi");
  };
  return (
    <article className="h-[70vh] rounded-2xl border bg-orange-light pb-2 pr-2 pt-2">
      <div className="cards-container grid  h-full snap-start grid-cols-4 gap-5 overflow-y-auto px-4 pb-4 pt-4">
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />{" "}
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />{" "}
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
        <Card
          text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus."
          handleClick={handleClick}
        />
      </div>
    </article>
  );
}
