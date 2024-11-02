import { Button } from "@/components/ui/button";

const buttons = () =>
{
    return (
        <section className="p-4 space-y-4 flex flex-col max-w-[200px] bg-">
      
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant = "primaryOutline">Primary Out</Button>
      <Button variant = "secondary">Secondary</Button>
      <Button variant="secondaryOutline">SecondaryOutline</Button>
      <Button variant = "danger">danger</Button>
      <Button variant="dangerOutline">dangerOutline</Button>
      <Button variant = "super">super</Button>
      <Button variant="superOutline">superOutline</Button>
      <Button variant="ghost">ghost </Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">sidebar outline</Button>




    </section>
    );
};

export default  buttons;