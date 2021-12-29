import dayjs, { Dayjs } from 'dayjs';
import { formatDate } from '@base-projects/web-uikit';
import { ReportType } from '#/generated/schemas';

export const formateDateByGroup = (
  date: dayjs.ConfigType,
  groupBy: ReportType,
) => {
  if (groupBy === ReportType.Year) {
    return formatDate(date, 'YYYY');
  }
  if (groupBy === ReportType.Month) {
    return formatDate(date, 'MM/YYYY');
  }
  if (groupBy === ReportType.Hour) {
    return formatDate(date, 'MM/DD H[h]');
  }
  return formatDate(date, 'MM/DD/YYYY');
};

export const formateDatesByGroup = (dates: Dayjs[], groupBy: ReportType) => {
  if (groupBy === ReportType.Year) {
    return [dates[0].startOf('year'), dates[1].endOf('year')];
  }
  if (groupBy === ReportType.Month) {
    return [dates[0].startOf('month'), dates[1].endOf('month')];
  }
  if (groupBy === ReportType.Week) {
    return [dates[0].startOf('week'), dates[1].endOf('week')];
  }
  if (groupBy === ReportType.Hour) {
    return [dates[0], dates[0].add(1, 'day')];
  }
  return dates;
};

export const getDefaultRangeDate = (groupBy: ReportType) => {
  if (groupBy === ReportType.Year) {
    return [dayjs('2021'), dayjs().endOf('year')];
  }
  if (groupBy === ReportType.Month) {
    return [dayjs().startOf('year'), dayjs().endOf('month')];
  }
  if (groupBy === ReportType.Week) {
    return [dayjs().subtract(4, 'week').startOf('week'), dayjs().endOf('week')];
  }
  if (groupBy === ReportType.Day) {
    return [dayjs().subtract(7, 'day'), dayjs()];
  }
  if (groupBy === ReportType.Hour) {
    return [dayjs(), dayjs().add(1, 'day')];
  }
  return [dayjs(), dayjs()];
};

export const getDefaultRankingRangeDate = (groupBy: ReportType) => {
  if (groupBy === ReportType.Year) {
    return [dayjs().startOf('year'), dayjs().endOf('year')];
  }
  if (groupBy === ReportType.Month) {
    return [dayjs().startOf('month'), dayjs().endOf('month')];
  }
  if (groupBy === ReportType.Week) {
    return [dayjs().startOf('week'), dayjs().endOf('week')];
  }
  if (groupBy === ReportType.Day) {
    return [dayjs().startOf('day'), dayjs().endOf('day')];
  }
  return [dayjs(), dayjs()];
};
