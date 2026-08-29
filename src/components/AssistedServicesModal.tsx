import React, { useState } from 'react';
import { X, HeartHandshake, ShieldCheck, CheckCircle2, User, Phone, MapPin, Calendar } from 'lucide-react';

interface AssistedServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssistedServicesModal: React.FC<AssistedServicesModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    seniorName: '',
    phone: '',
    destination: 'Varanasi',
    travelDate: '',
    serviceType: 'Wheelchair & Seva Attendant',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 rounded-3xl w-full max-w-lg border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Header */}
        <div className="p-5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-glow">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white">
                Senior Assisted Seva
              </h3>
              <p className="text-[11px] text-amber-400 font-semibold">
                Dedicated Escorts • Wheelchairs • Priority Gate Passes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-['EB_Garamond',serif] text-2xl font-medium text-white">
                Assisted Care Request Received
              </h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                Namaste. Our verified local temple concierge for <strong className="text-amber-300">{formData.destination}</strong> will coordinate with you at <strong className="text-white">{formData.phone}</strong> within 3 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Senior Devotee Name(s) & Age
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.seniorName}
                    onChange={(e) => setFormData({ ...formData, seniorName: e.target.value })}
                    placeholder="e.g. Ramesh Chandra (72 yrs)"
                    className="w-full pl-10 pr-3 py-2 bg-slate-950/80 border border-slate-700 focus:border-amber-500 rounded-2xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50 placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Contact Phone
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 bg-slate-950/80 border border-slate-700 focus:border-amber-500 rounded-2xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950/80 border border-slate-700 focus:border-amber-500 rounded-2xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                  >
                    <option value="Varanasi" className="bg-slate-900 text-slate-200">Varanasi</option>
                    <option value="Ayodhya" className="bg-slate-900 text-slate-200">Ayodhya</option>
                    <option value="Tirupati" className="bg-slate-900 text-slate-200">Tirupati</option>
                    <option value="Rishikesh" className="bg-slate-900 text-slate-200">Rishikesh</option>
                    <option value="Amritsar" className="bg-slate-900 text-slate-200">Amritsar</option>
                    <option value="Kedarnath" className="bg-slate-900 text-slate-200">Kedarnath</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Required Assistance Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950/80 border border-slate-700 focus:border-amber-500 rounded-2xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50"
                >
                  <option value="Wheelchair & Seva Attendant" className="bg-slate-900 text-slate-200">Wheelchair & Seva Attendant</option>
                  <option value="Battery-Car E-Rickshaw Transfer" className="bg-slate-900 text-slate-200">Battery-Car E-Rickshaw Transfer</option>
                  <option value="Special VIP Senior Darshan Pass Escort" className="bg-slate-900 text-slate-200">Special VIP Senior Darshan Pass Escort</option>
                  <option value="Full Comprehensive Care (All-Inclusive)" className="bg-slate-900 text-slate-200">Full Comprehensive Care (All-Inclusive)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                  Special Notes / Mobility Constraints
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Cannot climb stairs, needs oxygen support..."
                  className="w-full p-2.5 bg-slate-950/80 border border-slate-700 focus:border-amber-500 rounded-2xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50 resize-none placeholder:text-slate-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)] active:scale-95 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-slate-950" />
                <span>Confirm Assisted Seva Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
