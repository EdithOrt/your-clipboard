"use client";

import { Card } from "./card";

export function CardsContainer() {
  const handleExample = () => {
    return console.log("hi");
  };
  return (
    <article className="grid h-[70vh] grid-cols-4 overflow-y-auto rounded-2xl border bg-orange-light px-4 pb-4 pt-8">
      <Card text="Nam quis pretium libero. Curabitur in luctus ex. Praesent magna metus, gravida pretium sapien eu, condimentum porttitor purus. Praesent vitae arcu volutpat, commodo lectus congue, molestie massa. Aenean lobortis rhoncus risus id gravida. Sed vitae elit ornare leo efficitur vulputate et varius eros. Nam tristique lobortis nisl, et imperdiet odio rutrum in. Sed in erat non leo finibus tempor. Suspendisse purus risus, consequat vitae lacus eleifend, gravida congue felis. Fusce justo purus, eleifend at mattis quis, varius mollis sem. Pellentesque suscipit ex id justo rhoncus, nec pharetra diam laoreet. Pellentesque suscipit gravida nulla, vel sodales ante auctor quis. Cras mattis, diam eu rutrum viverra, urna libero elementum quam, nec vehicula ante leo sed ex. Sed eu ex elementum dolor facilisis accumsan. Nulla ornare neque nec tellus pellentesque hendrerit. Praesent hendrerit rhoncus maximus." />
    </article>
  );
}
