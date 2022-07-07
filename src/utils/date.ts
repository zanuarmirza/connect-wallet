import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import dayJsRelativeTime from 'dayjs/plugin/relativeTime';

interface CountdownInput {
  start?: Date;
  end?: Date;
  enabled?: boolean;
}

interface CountdownOutput {
  seconds?: string;
  minutes?: string;
  hours?: string;
  days?: string;
  time?: number;
  isEnabled?: boolean;
  isActive?: boolean;
  isPending?: boolean;
  isFinished?: boolean;
}

interface CountDown {
  (props: CountdownInput): CountdownOutput;
}

export const useCountdown: CountDown = (props) => {
  const [output, setOutput] = useState<CountdownOutput>({
    seconds: '-',
    minutes: '-',
    hours: '-',
    days: '-',
  });

  const second = 1000; //1 sec = 1000 ms
  const minute = 60 * second; //1 minute = 60 seconds
  const hour = 60 * minute; //1 hour = 60 minutes
  const day = 24 * hour; //1 day = 24 hour

  // init status countdown
  useEffect(() => {
    if (props.start && props.end) {
      const startDate = dayjs(props.start);
      const endDate = dayjs(props.end);

      // default value isEnabled = true
      const isEnabled = props.enabled === false ? false : true;
      const isPending = !!isEnabled && startDate.diff(dayjs()) > 0;
      const isFinished = !!isEnabled && endDate.diff(dayjs()) < 0;
      const isActive =
        !!isEnabled && startDate.diff(dayjs()) < 0 && endDate.diff(dayjs()) > 0;
      setOutput((state) => ({
        ...state,
        isEnabled,
        isPending,
        isFinished,
        isActive,
      }));
    }
  }, [
    props.start?.toString(),
    props.end?.toString(),
    props.enabled,
    output.time,
  ]);

  // init countdown
  useEffect(() => {
    if ('isActive' in output) {
      const startDate = dayjs(props.start);
      const endDate = dayjs(props.end);

      // ticks
      let timeInterval = setInterval(() => {
        const now = dayjs();
        const time = (output.isFinished ? now : endDate).diff(
          !output.isPending ? now : startDate,
          'ms'
        );
        const days = String(Math.floor(time / day));
        let timeMod = time % day;
        const hours = String(Math.floor(timeMod / hour));
        timeMod = timeMod % hour;
        const minutes = String(Math.floor(timeMod / minute));
        timeMod = timeMod % minute;
        const seconds = String(Math.floor(timeMod / second));

        setOutput((state) => ({
          ...state,
          time,
          days,
          hours,
          minutes,
          seconds,
        }));

        if (output.isActive === false) clearInterval(timeInterval);
      }, 1000);

      return () => {
        clearInterval(timeInterval);
      };
    }
  }, [output.isActive]);

  return output;
};

export const formatDate = (date: string | Date, format: string) =>
  dayjs(date).format(format);

export const relativeTime = () => {
  dayjs.extend(dayJsRelativeTime);
  return dayjs();
};
