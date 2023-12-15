import { render, screen } from "@testing-library/react";
import { IDefenseProps } from "@/app/(services)/(routes)/services/interfaces/iDefense.interface";
import HomePage from "../page";
import "@testing-library/jest-dom";

const mockTodos: IDefenseProps[] = [
  {
    id: 1,
    name: "SERPRO",
    status: "up",
    href: "/",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 2,
    name: "Tribunal de Justiça",
    status: "warning",
    href: "/",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
];

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("HomePage - List services", () => {
  it('should render "No services" when the array is empty', () => {
    // ARRANGE
    render(<HomePage rows={[]}/>);

    //ACT
    const message = screen.getByText("Carregando serviços...");

    // ASSERT
    expect(message).toBeInTheDocument();
  });

  it("should render a list services with the correct number of items", async () => {
    // ARRANGE
    render(<HomePage rows={mockTodos} />);

    // ACT
    const firstItem = screen.getAllByTestId("SERPRO")[0];

    // ASSERT
    expect(firstItem).toHaveTextContent("SERPRO");
  });
});
