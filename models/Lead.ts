import mongoose from 'mongoose';

export interface ILead {
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt: Date;
}

const LeadSchema = new mongoose.Schema<ILead>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  company: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
