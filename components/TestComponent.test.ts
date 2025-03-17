import { beforeEach, describe, it, expect } from "vitest";
import { cleanup, fireEvent, render } from '@testing-library/vue'
import TestComponent from "./TestComponent.vue";

describe('TestComponent', () => {
  beforeEach(cleanup)
  
  it('should render the text', async () => {
    const { getByRole, getByText } = render(TestComponent)
    
    const button = getByRole('button', { name: 'click me' })
    await fireEvent.click(button)
    
    getByText('Hello world')
  })
})