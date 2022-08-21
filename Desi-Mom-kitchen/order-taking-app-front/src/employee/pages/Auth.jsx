import React from "react";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

const Auth = () => {
  return (
    <div className="center">
      <Card>
        <form>
          <Input element="input" type="text" label="Employee ID" />
          <Input element="input" type="password" label="Password" />
          <Button>Clock IN</Button>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
