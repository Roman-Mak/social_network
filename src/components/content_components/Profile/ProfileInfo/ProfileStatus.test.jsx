import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("<span> should be display", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="this is my design" />);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
    });
    test("status should be display correct", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="this is my design" />);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.props.children).toBe("this is my design");
    });
    test("<input> should be hidden", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="this is my design" />);
        });
        const instance = component.root;
        expect(() => {
            return instance.findByType("input");
        }).toThrow();
    });
    test("on span doubleClick input should shows", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="this is my design" />);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        act(() => {
            span.props.onDoubleClick();
        });
        const input = instance.findByType("input");
        expect(input).not.toBeNull();
    });
    test("after span double click value should be equal to status", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="this is my design" />);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        act(() => {
            span.props.onDoubleClick();
        });
        const input = instance.findByType("input");
        expect(input.props.value).toBe("this is my design");
    });
    test("callback from props should be called", () => {
        const mockCallback = jest.fn();
        let component;
        act(() => {
            component = create(<ProfileStatus status="this is my design" updateStatus={mockCallback}/>);
        });
        const instance = component.root;
        const span = instance.findByType("span");
        act(() => {
            span.props.onDoubleClick();
        });
        const input = instance.findByType("input");
        act(() => {
            input.props.onBlur();
        });
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});