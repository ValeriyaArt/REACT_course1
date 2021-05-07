import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe('Profile status component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'hochy zdohnnyt'}/>);
        const instance = component.getInstance()
        expect(instance.state.status).toBe('hochy zdohnnyt');
    })
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status={'hochy zdohnnyt'}/>);
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    })
    test('after creation span should be displayed with a correct status', () => {
        const component = create(<ProfileStatus status={'hochy zdohnnyt'}/>);
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('hochy zdohnnyt' );
    })
    test('input should be displayed in EditMode instead of span', () => {
        const component = create(<ProfileStatus status={'hochy zdohnnyt'}/>);
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('hochy zdohnnyt' );
    })
    test('after creation INPUT shouldn`t be displayed', () => {
        const component = create(<ProfileStatus status={'hochy zdohnnyt'}/>);
        const root = component.root
        expect(()=> {
            let input = root.findByType('input')
        }).toThrow();
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'hochy zdohnnyt'} updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})