import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import emailjs from '@emailjs/browser';
import Contact from './contact';

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(),
}));

const originalEnvironment = process.env;

const configureEmail = () => {
  process.env = {
    ...originalEnvironment,
    REACT_APP_EMAILJS_SERVICE_ID: 'service_test',
    REACT_APP_EMAILJS_TEMPLATE_ID: 'template_test',
    REACT_APP_EMAILJS_PUBLIC_KEY: 'public_test',
  };
};

const fillForm = () => {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Hiring Manager' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'manager@example.com' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Let us discuss an opportunity.' } });
};

afterEach(() => {
  process.env = originalEnvironment;
  jest.clearAllMocks();
});

test('shows a direct email option when EmailJS is not configured', () => {
  process.env = { ...originalEnvironment };
  delete process.env.REACT_APP_EMAILJS_SERVICE_ID;
  delete process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  delete process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  render(<Contact />);

  expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled();
  expect(screen.getByText(/contact form is temporarily unavailable/i)).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /kbyunghak@gmail.com/i })[0]).toHaveAttribute(
    'href',
    'mailto:kbyunghak@gmail.com'
  );
});

test('submits the contact form and clears fields after success', async () => {
  configureEmail();
  emailjs.send.mockResolvedValue({ status: 200 });
  render(<Contact />);
  fillForm();

  fireEvent.click(screen.getByRole('button', { name: 'Send message' }));

  await waitFor(() => expect(emailjs.send).toHaveBeenCalledTimes(1));
  expect(await screen.findByText('Message sent successfully.')).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toHaveValue('');
  expect(screen.getByLabelText('Email')).toHaveValue('');
  expect(screen.getByLabelText('Message')).toHaveValue('');
});

test('preserves contact form values after a send failure', async () => {
  configureEmail();
  emailjs.send.mockRejectedValue(new Error('Network error'));
  render(<Contact />);
  fillForm();

  fireEvent.click(screen.getByRole('button', { name: 'Send message' }));

  expect(await screen.findByText(/could not be sent/i)).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toHaveValue('Hiring Manager');
  expect(screen.getByLabelText('Email')).toHaveValue('manager@example.com');
  expect(screen.getByLabelText('Message')).toHaveValue('Let us discuss an opportunity.');
  expect(screen.getByRole('button', { name: 'Send message' })).toBeEnabled();
});
