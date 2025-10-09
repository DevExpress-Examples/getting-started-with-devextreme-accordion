import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../AccordionContent.vue';

describe('AccordionContent', () => {
  it('renders properly', () => {
    const wrapper = mount(Content);
    expect(wrapper.find('#container').exists()).toBe(true);
  });
});
