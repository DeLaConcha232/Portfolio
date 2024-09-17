import { Badge, Avatar } from "@nextui-org/react";



export default function App() {
  return (
    <div className="flex gap-3 items-center w-auto h-auto static" >
      <Badge content="4" color="primary" size="sm" variant="solid">
        <Avatar
          isBordered
          radius="full"
          src=""
        />
      </Badge>
      <Badge content="2" color="primary" size="sm" variant="solid">
        <Avatar
          isBordered
          radius="md"
          src=""
        />
      </Badge>
      <Badge content="3" color="primary" size="sm" variant="solid">
        <Avatar
          isBordered
          radius="md"
          src=""
        />
      </Badge>
      <Badge content="1" color="primary" size="sm" variant="solid">
        <Avatar
          isBordered
          radius="md"
          src=""
        />
      </Badge>
      <Badge content="5" color="primary" size="sm" variant="solid">
        <Avatar
          isBordered
          radius="md"
          src=""
        />
      </Badge>
    </div>
  );
}