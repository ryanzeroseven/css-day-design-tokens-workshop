import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Components/Text Field',
  tags: ['autodocs'],
  render: () =>
    html`<div class=" ds-c-text-field ">
      <label class="ds-c-text-field__label" for="text-field-1">Label</label>
      <div class="ds-c-text-field__body">
        <input
          class="ds-c-text-field__input"
          type="text"
          id="text-field-1"
          required="true"
          aria-describedby="text-field-1-fieldnote"
          placeholder="Placeholder"
        />
      </div>

      <div class="ds-c-text-field__fieldnote" id="text-field-1-fieldnote">This is a fieldnote</div>
    </div>`,
  component: 'ds-text-field'
} satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Optional: Story = {
  render: () =>
    html`<div class=" ds-c-text-field">
      <label class="ds-c-text-field__label" for="text-field-1">Label <span class="ds-c-text-field__optional">(optional)</span></label>
      <div class="ds-c-text-field__body">
        <input
          class="ds-c-text-field__input"
          type="text"
          id="text-field-1"
          required="true"
          aria-describedby="text-field-1-fieldnote"
          placeholder="Placeholder"
        />
      </div>

      <div class="ds-c-text-field__fieldnote" id="text-field-1-fieldnote">This is a fieldnote</div>
    </div>`
};

export const Error: Story = {
  render: () =>
    html`<div class="ds-c-text-field ds-is-error">
      <label class="ds-c-text-field__label" for="text-field-1">Label</label>
      <div class="ds-c-text-field__body">
        <input
          class="ds-c-text-field__input"
          type="text"
          id="text-field-1"
          required="true"
          aria-describedby="text-field-1-fieldnote"
          placeholder="Placeholder"
        />
      </div>

      <div class="ds-c-text-field__fieldnote" id="text-field-1-fieldnote">
        <svg class="ds-c-text-field__fieldnote-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M14.8 11.7557L9.33437 2.26379C9.19779 2.03124 9.00281 1.83843 8.76875 1.70445C8.53469 1.57048 8.26969 1.5 8 1.5C7.73031 1.5 7.4653 1.57048 7.23124 1.70445C6.99719 1.83843 6.8022 2.03124 6.66562 2.26379L1.2 11.7557C1.06858 11.9806 0.999329 12.2364 0.999329 12.4969C0.999329 12.7574 1.06858 13.0132 1.2 13.2382C1.33483 13.4721 1.52948 13.666 1.76397 13.7999C1.99847 13.9338 2.26436 14.0028 2.53437 14H13.4656C13.7354 14.0026 14.0011 13.9334 14.2353 13.7996C14.4696 13.6657 14.664 13.4719 14.7987 13.2382C14.9304 13.0134 14.9998 12.7576 15 12.4971C15.0003 12.2366 14.9312 11.9807 14.8 11.7557ZM13.9331 12.7375C13.8855 12.8188 13.8171 12.886 13.7349 12.9321C13.6528 12.9782 13.5598 13.0017 13.4656 13H2.53437C2.44017 13.0017 2.34723 12.9782 2.26508 12.9321C2.18293 12.886 2.11452 12.8188 2.06687 12.7375C2.02371 12.6645 2.00095 12.5812 2.00095 12.4963C2.00095 12.4114 2.02371 12.3281 2.06687 12.255L7.5325 2.76317C7.58111 2.68227 7.64983 2.61534 7.73197 2.56887C7.81411 2.5224 7.90688 2.49797 8.00125 2.49797C8.09562 2.49797 8.18839 2.5224 8.27053 2.56887C8.35267 2.61534 8.42139 2.68227 8.47 2.76317L13.9356 12.255C13.9784 12.3283 14.0007 12.4118 14.0003 12.4966C13.9999 12.5815 13.9767 12.6647 13.9331 12.7375ZM7.5 9.00004V6.50004C7.5 6.36743 7.55268 6.24026 7.64645 6.14649C7.74021 6.05272 7.86739 6.00004 8 6.00004C8.13261 6.00004 8.25978 6.05272 8.35355 6.14649C8.44732 6.24026 8.5 6.36743 8.5 6.50004V9.00004C8.5 9.13265 8.44732 9.25983 8.35355 9.35359C8.25978 9.44736 8.13261 9.50004 8 9.50004C7.86739 9.50004 7.74021 9.44736 7.64645 9.35359C7.55268 9.25983 7.5 9.13265 7.5 9.00004ZM8.75 11.25C8.75 11.3984 8.70601 11.5434 8.6236 11.6667C8.54119 11.7901 8.42406 11.8862 8.28701 11.943C8.14997 11.9997 7.99917 12.0146 7.85368 11.9856C7.7082 11.9567 7.57456 11.8853 7.46967 11.7804C7.36478 11.6755 7.29335 11.5418 7.26441 11.3964C7.23547 11.2509 7.25032 11.1001 7.30709 10.963C7.36385 10.826 7.45998 10.7088 7.58332 10.6264C7.70666 10.544 7.85166 10.5 8 10.5C8.19891 10.5 8.38968 10.5791 8.53033 10.7197C8.67098 10.8604 8.75 11.0511 8.75 11.25Z"
          />
        </svg>
        This is a fieldnote
      </div>
    </div>`
};

export const Inverted: Story = {
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () =>
    html`<div class=" ds-c-text-field ds-c-text-field--inverted">
      <label class="ds-c-text-field__label" for="text-field-1">Label</label>
      <div class="ds-c-text-field__body">
        <input
          class="ds-c-text-field__input"
          type="text"
          id="text-field-1"
          required="true"
          aria-describedby="text-field-1-fieldnote"
          placeholder="Placeholder"
        />
      </div>

      <div class="ds-c-text-field__fieldnote" id="text-field-1-fieldnote">This is a fieldnote</div>
    </div>`
};
