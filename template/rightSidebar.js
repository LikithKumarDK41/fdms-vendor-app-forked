import { Button } from "@/components";
import { useRouter } from "next/navigation";
import { FiShoppingCart, FiUser } from "react-icons/fi";

export const RightSideBar = () => {
  const router =useRouter();

  return (
    <div className="right-sidebar lg:flex flex-col justify-content-end items-end">
      <div className="right-side-content">
        <div className="w-full">
          <Button
            parentClassName="w-full register-button"
            buttonProps={{
              text: "カート",
              icon: (
                <i>
                  {" "}
                  <FiShoppingCart />
                </i>
              ),
              iconPos: "top",
              buttonClass: "w-full border-white border-2",
              custom: "userGuide-button h-auto",
            }}
          />
        </div>
        <div className="w-full">
          <Button
            parentClassName="w-full"
            buttonProps={{
              text: "アカウント",
              icon: (
                <i >
                  <FiUser />
                </i>
              ),
              onClick: () =>router.push("/account"),
              iconPos: "top",
              custom: "userGuide-button h-auto",
              buttonClass: "w-full border-white",
            }}
          />
        </div>
      </div>
    </div>
  );
};
