import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form";

describe("Formulario de usuarios", () => {
  test("permite escribir y enviar", async () => {
    const mockSubmit = jest.fn();
    render(<Form onSubmit={mockSubmit} />);

    await userEvent.type(screen.getByPlaceholderText("Nombre"), "Daniel");
    await userEvent.click(screen.getByText("Guardar"));

    expect(mockSubmit).toHaveBeenCalledWith("Daniel");
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });

  test("no envía si el input está vacío", async () => {
    const mockSubmit = jest.fn();
    render(<Form onSubmit={mockSubmit} />);

    await userEvent.click(screen.getByText("Guardar"));
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
