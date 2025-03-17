import { beforeEach, describe, it, expect } from "vitest";
import { cleanup, fireEvent, render } from '@testing-library/vue'
import Index from "./index.vue";

describe('Index', () => {
  beforeEach(cleanup)
  
  it('should render the text', async () => {
    const { getByRole, getByText } = render(Index)
    
    const button = getByRole('button', { name: 'click me' })
    await fireEvent.click(button)
    
    getByText('Hello world')
  })
})