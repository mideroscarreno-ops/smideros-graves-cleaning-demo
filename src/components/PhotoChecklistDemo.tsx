import React, { useState } from 'react';
import { Camera, Check, ClipboardList, Eye, Sparkles } from 'lucide-react';
import { PHOTO_CHECKLIST_ROOMS } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface PhotoChecklistDemoProps {
  onRequestQuote?: () => void;
  compact?: boolean;
}

const WORKFLOW_STAGES = [
  {
    step: '01',
    title: 'Property Cleaning Completed',
    detail: 'Crew finishes the room-by-room cleaning scope and guest-ready presentation.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'Room-by-Room Checklist',
    detail: 'Each space is checked against property notes before the crew locks up.',
    icon: ClipboardList,
  },
  {
    step: '03',
    title: 'Photographic Evidence',
    detail: 'Clear, well-lit room photos are captured to document beds, kitchens, baths, and entryways.',
    icon: Camera,
  },
  {
    step: '04',
    title: 'Owner Review',
    detail: 'Local and out-of-state hosts review readiness remotely with complete clarity.',
    icon: Eye,
  },
];

export const PhotoChecklistDemo: React.FC<PhotoChecklistDemoProps> = ({
  onRequestQuote,
  compact = false,
}) => {
  const [activeRoomId, setActiveRoomId] = useState<string>(PHOTO_CHECKLIST_ROOMS[0].id);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(2);

  const activeRoom =
    PHOTO_CHECKLIST_ROOMS.find((room) => room.id === activeRoomId) ?? PHOTO_CHECKLIST_ROOMS[0];

  return (
    <section
      aria-labelledby="photo-checklist-heading"
      className={`${compact ? 'py-16 lg:py-20' : 'py-20 lg:py-28'} bg-[#14263B] text-[#FAF9F5]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-medium tracking-wide text-[#C5A47A]">
              Post-Cleaning Documentation · Illustrative Example
            </p>
            <h2
              id="photo-checklist-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white"
            >
              See the Clean. Even When You’re Miles Away.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#FAF9F5]/80 leading-relaxed">
              Graves Cleaning provides post-cleaning photo checklists so remote owners, property managers,
              and commercial stakeholders can review room readiness after service. Below is an illustrative
              example of how room-by-room verification is organized.
            </p>
          </div>
        </div>

        {/* 4-Stage Workflow Interactive Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {WORKFLOW_STAGES.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = activeStageIndex === index;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStageIndex(index)}
                className={`text-left p-5 rounded-xl border transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white/10 border-[#C5A47A]/60 text-white'
                    : 'bg-white/[0.03] border-white/10 text-[#FAF9F5]/75 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-tabular text-xs text-[#C5A47A]">{stage.step}</span>
                  <Icon className="w-4 h-4 text-[#DFF2EA]" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{stage.title}</h3>
                <p className="text-xs text-[#FAF9F5]/70 leading-relaxed">{stage.detail}</p>
              </button>
            );
          })}
        </div>

        {/* Interactive Room-by-Room Illustrative Checklist Preview */}
        <div className="bg-[#FAF9F5] text-[#14263B] rounded-2xl border border-white/15 overflow-hidden">
          {/* Header strip clearly marking illustrative status */}
          <div className="px-5 sm:px-8 py-4 bg-[#F3F1EA] border-b border-[#14263B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#60717B]">
              <span className="font-semibold text-[#14263B]">Illustrative Example</span>
              <span aria-hidden="true">·</span>
              <span>Sample Post-Cleaning Room Report</span>
              <span aria-hidden="true">·</span>
              <span>Not a live customer record</span>
            </div>

            {/* Room Switcher Segmented Buttons */}
            <div role="tablist" aria-label="Checklist rooms" className="flex flex-wrap items-center gap-1.5">
              {PHOTO_CHECKLIST_ROOMS.map((room) => {
                const selected = room.id === activeRoom.id;
                return (
                  <button
                    key={room.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveRoomId(room.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      selected
                        ? 'bg-[#14263B] text-white'
                        : 'bg-white text-[#60717B] hover:text-[#14263B] border border-[#14263B]/10'
                    }`}
                  >
                    {room.roomName}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] bg-[#14263B]/5">
              <ResilientImage
                src={activeRoom.image}
                alt={activeRoom.imageAlt}
                fallbackTitle={activeRoom.roomName}
                className="w-full h-full object-cover lg:h-[440px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14263B]/85 via-[#14263B]/40 to-transparent p-5 sm:p-6 text-white">
                <div className="flex items-center gap-2 text-xs text-[#DFF2EA] font-mono-tabular mb-1">
                  <span>{activeRoom.areaCode}</span>
                  <span aria-hidden="true">·</span>
                  <span>ILLUSTRATIVE ROOM PHOTO</span>
                </div>
                <p className="text-sm text-white/95 max-w-xl">{activeRoom.summaryNote}</p>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between border-b border-[#14263B]/10 pb-4 mb-6">
                  <div>
                    <p className="text-xs font-medium text-[#147D68]">Sample Verification View</p>
                    <h3 className="font-editorial text-2xl font-semibold text-[#14263B] mt-0.5">
                      {activeRoom.roomName}
                    </h3>
                  </div>
                  <span className="font-mono-tabular text-xs text-[#60717B]">{activeRoom.areaCode}</span>
                </div>

                <ul className="space-y-5">
                  {activeRoom.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3.5">
                      <span className="w-6 h-6 rounded-md bg-[#DFF2EA] text-[#147D68] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-[#14263B]">{item.label}</div>
                        <div className="text-sm text-[#60717B] leading-relaxed mt-0.5">{item.detail}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-[#14263B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-[#60717B] leading-relaxed">
                  Exact checklist items are tailored to your property’s rooms, beds, and owner instructions.
                </p>
                {onRequestQuote && (
                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="px-4 py-2.5 rounded-lg bg-[#147D68] text-white text-xs font-medium whitespace-nowrap shrink-0 hover:bg-[#0F6352] transition-colors cursor-pointer"
                  >
                    Request a Free Quote
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
