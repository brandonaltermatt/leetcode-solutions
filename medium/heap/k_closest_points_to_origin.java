import java.util.PriorityQueue;

class Solution {
    private int getDistance(int[] point) {
        return (point[0] * point[0]) + (point[1] * point[1]);
    }
    
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> heap = new PriorityQueue<>(
            (point1, point2) -> Integer.compare(getDistance(point1), getDistance(point2)));

        for(int[] point : points) {
            heap.add(point);
        }

        int[][] result = new int[k][2];

        for(int i = 0; i < k; i++) {
            result[i] = heap.poll();
        }

        return result;
    }
}

/* Very optimized partition solution
class Solution {
    public int[][] kClosest(int[][] points, int k) {
        int left = 0;
        int right = points.length - 1;
        int pivotIndex = points.length;
        while (pivotIndex != k) {
            pivotIndex = partition(points, left, right);
            if (pivotIndex < k) {
                left = pivotIndex;
            } else {
                right = pivotIndex - 1;
            }
        }
        return Arrays.copyOf(points, k);
    }
    
    private int partition(int[][] points, int left, int right) {
        int[] pivot = points[left + (right - left) / 2];
        int pivotDistance = distance(pivot);
        while (left <= right) {
            while (distance(points[left]) < pivotDistance) {
                left += 1;
            }
            while (distance(points[right]) > pivotDistance) {
                right -= 1;
            }
            if (left <= right) {
                swap(points, left, right);
                left += 1;
                right -= 1;
            }
        }
        return left;
    }
    
    private void swap(int[][] arr, int left, int right) {
        int[] temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    
    private int distance(int[] point) {
        return point[0]*point[0] + point[1]*point[1];
    }
}
*/

/* Initial heap solution
import java.util.Comparator;
import java.util.PriorityQueue;

class LineSegment {
    public LineSegment(int distance, int[] coordinates) {
        this.distance = distance;
        this.coordinates = coordinates;
    }

    public int distance;
    public int[] coordinates;
}

class lineSegmentComparator implements Comparator<LineSegment> {
    @Override
    public int compare(LineSegment a, LineSegment b) {
        if (a.distance < b.distance) {
            return -1;
        }
        if (a.distance > b.distance) {
            return 1;
        }
        return 0;
    }
}

class Solution {
    public int[][] kClosest(int[][] points, int k) {
        int [][] result = new int[k][];
        PriorityQueue<LineSegment> minHeap = new PriorityQueue<LineSegment>(new lineSegmentComparator());

        for (int[] point : points) {
            int distance = (point[0] * point[0]) + (point[1] * point[1]);
            LineSegment segment = new LineSegment(distance, point);
            minHeap.add(segment);
        }

        for (int i = 0; i < k; i++) {
            int[] coordinates = minHeap.poll().coordinates;
            result[i] = coordinates;
        }

        return result;
    }
}
*/