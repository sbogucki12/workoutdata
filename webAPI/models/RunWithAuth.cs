namespace runlog2023.models
{
    public class RunWithAuth
    {
        public string pw { get; set; }
        public Int64 index { get; set; }
        public Int64 runId { get; set; }
        public DateTime date { get; set; }
        public DateTime duration { get; set; }
        public double length { get; set; }
        public string type { get; set; }
        public string surface { get; set; }
        public DateTime pace { get; set; }
        public double sleepHours { get; set; }
        public DateTime sleepToBedTime { get; set; }
        public DateTime sleepWakeTime { get; set; }
        public string runListenedTo { get; set; }
        public double temperature { get; set; }
        public Int64 shoeAge { get; set; }
        public DateTime startTime { get; set; }
    }
}
