import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function App() {
    let tabs = [
      {
        id: "Why we made the app.",
        label: "Why we made the app",
        content: "Nowadays, health apps have always been marketing centered, not taking into the account of the users experience. Many people set themselves unrealistic goals where they are unable to keep up with their goals, as a result of this, many people are losing motivation. Thus we the members of byteoverflow have decided to tackle this with an innovative solution."
      },
      {
        id: "Why is our app special?",
        label: "Why is our app special?",
        content: "With this app we hope to provide a simplistic yet modern user interface. This app provides a unique experience where we suggest the user what fitness plan they should undertake according to their Body Mass Index and their planned goals."
      },
      {
        id: "Pricing",
        label: "Pricing",
        content: "As of today this app in in Beta testing and is absolutely free."
      }
    ];
  
    return (
      <div className="flex w-full flex-col">
        <Tabs aria-label="Dynamic tabs" items={tabs} className="font-bold" color="primary">
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card className="font-normal">
                <CardBody>
                  {item.content}
                </CardBody>
              </Card>  
            </Tab>
          )}
        </Tabs>
      </div>  
    );
  }
  