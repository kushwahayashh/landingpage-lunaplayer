import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a feature request, bug report, or just want to say hi?
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea 
              id="message" 
              rows="5" 
              className="w-full px-4 py-3 bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              placeholder="How can we help?"
            ></textarea>
          </div>

          <Button type="submit" className="w-full md:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;